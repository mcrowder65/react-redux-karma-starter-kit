#!/bin/bash

dep=$(node list-dependencies.js)
npm install --save dep