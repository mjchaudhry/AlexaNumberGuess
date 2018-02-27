rm lambda.zip
cd lambda
npm install
zip -r ../lambda.zip *
cd ..
aws lambda update-function-code --function-name guessNumber --zip-file fileb://lambda.zip --region eu-west-1 --profile alexa
