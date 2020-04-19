import Vue from "vue";
import { ENIGMA_CODE } from "@/utils/enigma-code";
export class StorageService extends Vue {
  private key = "tper_progress";

  public getUserProgress(): string | null {
    return sessionStorage ? sessionStorage.getItem(this.key) : null;
  }

  public saveUserProgress(enigma: string) {
    if (sessionStorage && enigma) {
      sessionStorage.setItem(this.key, ENIGMA_CODE[+enigma + 1]);
    }
  }
}

export const storageService = new StorageService();
