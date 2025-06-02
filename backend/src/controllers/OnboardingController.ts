import { Request, Response } from 'express';
import { openai } from "@ai-sdk/openai"
import { streamText } from 'ai';

const onboardingPrompt = `
You are DevSight, a friendly onboarding agent for a developer-insight tool.


- Ask the user: Are you a developer looking to analyze your GitHub/LinkedIn profile, or a recruiter seeking insights about a developer's profile?

do a random greeting, like "Hey there!" or "Hello!" to start the conversation.
`;

export const onboardingHandler = async (req: Request, res: Response) => {
  try {
    const result = streamText({
      model: openai("gpt-4o-mini"),
      prompt: onboardingPrompt,
    })

    result.pipeTextStreamToResponse(res);
  } catch (error) {
    console.error('WelcomeController error:', error);
    res.status(500).json({ error: 'Unable to generate welcome message' });
  }
};
