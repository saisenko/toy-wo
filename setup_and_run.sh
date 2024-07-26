#! /bin/bash

VENV_DIR_NAME="venv"
NODE_DIR_NAME="node_modules"

echo "Moving to backend directory..."
cd ./backend

echo "Removing existing virtual environment..."
if [ -d "$VENV_DIR_NAME" ]; then
    rm -rf $VENV_DIR_NAME
fi

echo "Creating new virtual environment..."
python3 -m venv $VENV_DIR_NAME

echo "Activating virtual environment..."
source ./$VENV_DIR_NAME/bin/activate

echo "Installing required packages..."
pip install -r requirements.txt

echo "Starting Flask backend server..."
nohup python3 run.py > backend_output.log 2>&1 &

echo "Moving to frontend directory..."
cd ../frontend/

if [ -d "$NODE_DIR_NAME" ]; then
    echo "Removing existing $NODE_DIR_NAME..."
    rm -rf $NODE_DIR_NAME
fi

echo "Installing required Node.js packages..."
npm install

echo "Running React+Vite application (dev mode)..."
nohup npm run dev > frontend_output.log 2>&1 &

echo "Both Flask backend and React+Vite frontend servers have been started."

wait
