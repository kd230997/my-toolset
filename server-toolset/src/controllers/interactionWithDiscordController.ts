import "dotenv/config";
import { InteractionType, InteractionResponseType } from "discord-interactions";

import commands from "../resources/discordInteractionCommands.json";
import { InstallGlobalCommands } from "../services/discordServices";

/*
Handle register command
'vote [content] [hours]'

*/

const interactionMethod = async (req: any, res: any) => {
  const { type } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    console.log("Discord Ping!");
    return res.send({ type: InteractionResponseType.PONG });
  }

  if (type === InteractionType.APPLICATION_COMMAND) {
  }
};

const registerCommandMethod = async (req: any, res: any) => {
  InstallGlobalCommands(commands).then((response: any) => {
    console.log(response);
  });
};

export default { interactionMethod };
