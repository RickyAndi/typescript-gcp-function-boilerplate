#!/bin/bash

gcloud scheduler jobs create pubsub my-job-name \
  --schedule="0 6 * * *" \
  --topic="projects/$(gcloud config get-value project)/topics/your-topic" \ 
  --message-body="test message"
