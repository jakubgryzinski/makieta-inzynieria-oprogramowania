#!/bin/bash
set -e

claude --permission-mode acceptEdits "@plans/prd.json @plans/progress.txt \
1. Read the PRD and progress file. \
2. Find the next incomplete task and implement it. \
3. Do NOT Commit your changes. \
4. Update progress.txt with what you did. Also Update prd file \
ONLY DO ONE TASK AT A TIME."