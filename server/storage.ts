// Storage interface for CGPA converter app
// Currently not used as conversion logic is handled client-side
// Can be extended in the future for user preferences, history, etc.

export interface IStorage {
  // Future storage methods can be added here
  // For example: saveConversionHistory, getUserPreferences, etc.
}

export class MemStorage implements IStorage {
  constructor() {
    // Placeholder for future storage functionality
  }
}

export const storage = new MemStorage();
