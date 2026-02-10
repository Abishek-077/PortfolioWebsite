import { ObjectId } from 'mongodb';
import { getDatabase } from '@/lib/mongodb';

export interface ContactMessageInput {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessage extends ContactMessageInput {
  _id?: ObjectId;
  createdAt: Date;
}

const COLLECTION_NAME = 'contact_messages';

export async function createContactMessage(input: ContactMessageInput): Promise<ContactMessage> {
  const db = await getDatabase();

  const doc: ContactMessage = {
    ...input,
    createdAt: new Date(),
  };

  const result = await db.collection<ContactMessage>(COLLECTION_NAME).insertOne(doc);

  return {
    ...doc,
    _id: result.insertedId,
  };
}
