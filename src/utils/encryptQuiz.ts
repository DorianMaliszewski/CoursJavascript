import type { APIResponse } from "types";
import { isNullOrUndefined } from "./isNullOrUndefined";
import crypto from "crypto";


const SECRET_KEY = import.meta.env.HASH_KEY.padEnd(32, "0"); // Doit être 32 octets
const IV = import.meta.env.HASH_IV?.padEnd(16,"0").slice(0, 16) || "12345678901256665614"; // 16 octets

export const encryptQuiz = (quiz: APIResponse) => {
    if (!isNullOrUndefined(quiz)) {
        const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), IV);
        let encrypted = cipher.update(JSON.stringify(quiz), "utf-8", "hex");
        encrypted += cipher.final("hex");
        return encrypted;
    }
    throw new Error("Quiz can't be encrypted because it is null.");
};