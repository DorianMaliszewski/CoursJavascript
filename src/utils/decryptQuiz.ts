import type { APIResponse } from "types";
import { isNullOrUndefined } from "./isNullOrUndefined";
import crypto from "crypto";


const SECRET_KEY = import.meta.env.HASH_KEY.padEnd(32, "0"); // Doit être 32 octets
const IV = import.meta.env.HASH_IV?.padEnd(16,"0").slice(0, 16) || "12345678901256665614"; // 16 octets

export const decryptQuiz = (encryptedQuiz: string) => {
    if (!isNullOrUndefined(encryptedQuiz)) {
        const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), IV);
        let decrypted = decipher.update(encryptedQuiz, "hex", "utf-8");
        decrypted += decipher.final("utf-8");
        return JSON.parse(decrypted) as APIResponse;
    }
    throw new Error("Quiz can't be decrypted because it is null.");
};