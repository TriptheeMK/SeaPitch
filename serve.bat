@echo off
echo Starting local server on http://localhost:8080
echo Press Ctrl+C to stop.
python -m http.server 8080 --directory project
