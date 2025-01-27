import "server-only";

import { compare, hash } from "bcryptjs";

import { userRepository } from "../repositories/userRepository";

class AuthService {
  public async signInWithCredentials(email: string, password: string) {
    const user = await userRepository.findByEmail(email);
    if (!user?.password) {
      throw new Error("Invalid email or password");
    }

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid email or password");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  public async signUpWithCredentials(
    name: string,
    email: string,
    password: string,
  ) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await userRepository.create({
      name,
      email,
      password: hashedPassword,
      emailVerified: new Date(),
    });

    if (!newUser) {
      throw new Error("Failed to create user");
    }

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
  }
}

export const authService = new AuthService();
