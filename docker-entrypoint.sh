#!/bin/bash

for f in /app/init.d/*
do
  . $f
done

supervisord -n
