#!/bin/bash

if [ "$1" = "all" ] || [ "$1" = "hello" ]; then
  echo "deploying hello route"
  gcloud functions deploy hello \
    --gen2 \
    --region=us-central1 \
    --runtime=nodejs20 \
    --entry-point=index \
    --trigger-http \
    --allow-unauthenticated \
    --source=./dist/routes/hello \
    --memory=128Mi \
    --max-instances=2
fi

if [ "$1" = "all" ] || [ "$1" = "index" ]; then
  echo "deploying index route"
  gcloud functions deploy index \
    --gen2 \
    --region=us-central1 \
    --runtime=nodejs20 \
    --entry-point=index \
    --trigger-http \
    --allow-unauthenticated \
    --source=./dist/routes/index \
    --memory=128Mi \
    --max-instances=2
fi

if [ "$1" = "all" ] || [ "$1" = "onTestMessage" ]; then
  echo "deploying onTestMessage event handler"
  gcloud functions deploy onTestMessage \
    --gen2 \
    --region=us-central1 \
    --runtime=nodejs20 \
    --entry-point=index \
    --retry \
    --trigger-topic=on-test-message \
    --source=./dist/events/onTestMessage \
    --memory=128Mi \
    --max-instances=2
fi