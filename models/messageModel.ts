import mongoose from "mongoose";
import { IUserDocument } from "./userModel";

export interface IMessage {
	sender: mongoose.Types.ObjectId | mongoose.PopulatedDoc<IUserDocument>;
	receiver: mongoose.Types.ObjectId | mongoose.PopulatedDoc<IUserDocument>;
	content: string;
	messageType: "text" | "image";
	opened: boolean;
}

export interface IMessageDocument extends IMessage, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const messageSchema = new mongoose.Schema<IMessageDocument>(
	{
		sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		content: { type: String, required: true },
		messageType: { type: String, required: true, enum: ["text", "image"] },
		opened: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Message: mongoose.Model<IMessageDocument> = mongoose.models?.Message || mongoose.model("Message", messageSchema);

export default Message;
