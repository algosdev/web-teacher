import React, { useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import {
  Widget,
  addResponseMessage,
  deleteMessages,
  toggleInputDisabled,
  toggleMsgLoader
} from 'react-chat-widget';
import botImage from '../../assets/images/icons/bot.png';
const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

export default function ChatWidget() {
  const generateResponse = async newQuestion => {
    let options = {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['/']
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion
    };

    const response = await openai.createCompletion(completeOptions);

    console.log(response);
    const text = response.data.choices?.[0]?.text;
    return text;
  };
  const handleNewUserMessage = async m => {
    console.log(m);
    try {
      toggleInputDisabled();
      addResponseMessage('yozmoqda...', 'typing');
      const message = await generateResponse(m);
      deleteMessages(1, 'typing');
      if (message?.trim()) {
        addResponseMessage(message);
      }
      toggleInputDisabled();
    } catch (err) {
      toggleInputDisabled();
      deleteMessages(1, 'typing');
    }
  };

  useEffect(() => {
    deleteMessages(1, 'welcome');
    addResponseMessage('Salom qanday yordam bersam bera olaman 🙂', 'welcome');
  }, []);

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Web Teacher"
      launcherOpenImg={botImage}
      emojis
      subtitle="CHATGPT bilan quvvatlangan!"
    />
  );
}
