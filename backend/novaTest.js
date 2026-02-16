const { BedrockRuntimeClient, ConverseCommand } = require('@aws-sdk/client-bedrock-runtime');

const client = new BedrockRuntimeClient({
  region: 'us-east-1'
});

async function testNova() {
  const command = new ConverseCommand({
    modelId: 'amazon.nova-lite-v1:0',
    messages: [
      {
        role: 'user',
        content: [{ text: "Explain AI in one sentence" }]
      }
    ],
    inferenceConfig: {
      maxTokens: 200,
      temperature: 0.5
    }
  });

  try {
    const response = await client.send(command);
    console.log(response.output.message.content[0].text);
  } catch (error) {
    console.error("ERROR:", error);
  }
}

testNova();