gcloud pubsub topics create on-test-message
gcloud scheduler jobs create pubsub on-test-message --location=us-central1 --schedule="0 6 * * *" --topic=on-test-message --message-body="jancok"
