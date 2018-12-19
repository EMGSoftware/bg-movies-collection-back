#!/bin/bash
git add . -A
git commit . -m "`date +\"%Y-%m-%d %r\"`"
git push origin master
read -p "Press Return to Close..."