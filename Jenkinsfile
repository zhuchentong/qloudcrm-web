@Library('qloudqa-pipeline-lib@master') import org.com.DitSteps
    acme.setJobName("$JOB_NAME")
        acme.init(BUILD_NUMBER)
        def dit = new org.com.DitSteps(this)
node {
    currentBuild.result = "SUCCESS"

    def nodeHome = tool 'NodeJS_11.14'

    name_list = "$JOB_NAME".split('/') //eg : 'qloudservice-qloudapi/master' --> ['qloudservice-qloudapi', 'master']
    def ver = name_list[1]           //eg : 'master'
    def job = name_list[0]           //eg : 'qloudservice-qloudapi'
    job_list = "$job".split('-')      //eg : 'qloudservice-qloudapi' --> ['qloudservice', 'qloudapi']
    def project = job_list[0]            //eg : 'qloudservice'
    job_size = job_list.size() - 1
    img_list = []
    for (x in (1..job_size)) {
        img_list.add(job_list[x])
    }
    def img = img_list.join('-')

    def ng_cmd = "npm run build"
    def ver_map = ["master": "latest"]
    if (ver_map.containsKey(ver)) {
        ver = ver_map.get(ver) + "$BUILD_NUMBER"
    }
    def tag = "reg.qloudhub.com/'${project}'/'${img}':'${ver}'"

    def script_dir = project + '/' + img + '/' + ver
    def slug_dir = "/tmp/'${script_dir}'"
    def slug_file = "'${slug_dir}'/server.tgz"

    try {
        //  代码检出
        stage('Check out') {
            checkout scm
        }

        // 代码构建
        stage('Build') {
            withEnv(["PATH+NODE=${ nodeHome }/bin"]) {
                sh "npm config set registry='https://qloudrepos.service.rd/repository/npm-group/'"
                sh 'rm -rf node_modules'
                sh 'npm install'
                sh "${ng_cmd}"
                dir('server') {
                    sh "rm -rf node_modules"
                    sh 'npm install'
                }
            }
        }

        stage('Docker build') {
            sh("chmod +x ./start.sh")
            sh("tar zcvf server.tgz -C ./server .")
            sh("docker build -t ${tag} .")
            sh("docker push ${tag}")
        }

        // Chart配置推送
        stage('send helm') {
           dit.pushChart(acme)
        }

        // 清理环境
        stage('cleanup') {
            sh("docker rmi ${tag}")
            sh("rm -f ${slug_file}")
            sh "rm -rf *"
            sh "rm -rf .git"
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}






