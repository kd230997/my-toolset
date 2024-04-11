import "dotenv/config";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import { getRandomEmoji, DiscordRequest } from "../services/discordServices";

const interactionMethod = async (req: any, res: any) => {
  const { type } = req;
  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    console.log("Discord Ping!");
    return res.send({ type: InteractionResponseType.PONG });
  }
};

export default { interactionMethod };
