import dotenv from "dotenv";
import { InstallGlobalCommands } from "../services/utils";

dotenv.config();

// Simple test command
const TEST_COMMAND = {
  name: "test",
  description: "Basic command",
  type: 1,
};

const mockChoices = [
  {
    value: 1,
    name: "Duy",
  },
  {
    value: 1,
    name: "Tran",
  },
];

// Command containing options
const CHALLENGE_COMMAND = {
  name: "challenge",
  description: "Challenge to a match of rock paper scissors",
  options: [
    {
      type: 3,
      name: "object",
      description: "Pick your object",
      required: true,
      choices: mockChoices,
    },
  ],
  type: 1,
};

const ALL_COMMANDS = [TEST_COMMAND, CHALLENGE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
