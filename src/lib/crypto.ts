/**
 * Simple obfuscation routine to prevent the raw API key from sitting in plain text inside localStorage.
 * Note: Since this is a purely client-side application without a secure backend to hold a master key, 
 * this is technically obfuscation via XOR + Base64 rather than mathematically uncrackable encryption.
 * It strictly prevents "shoulder-surfing" or basic skimming of the local storage payload.
 */

const OBFS_KEY = "gitrevs-vibe-coding-salt-2026";

export function encryptKey(text: string): string {
  if (!text) return "";
  try {
    // Basic XOR with the static salt
    const xorStr = text.split('').map((char, i) => {
      return String.fromCharCode(char.charCodeAt(0) ^ OBFS_KEY.charCodeAt(i % OBFS_KEY.length));
    }).join('');
    
    // Base64 encode the result
    return btoa(xorStr);
  } catch (e) {
    return "";
  }
}

export function decryptKey(encoded: string): string {
  if (!encoded) return "";
  try {
    // Base64 decode
    const decodedXor = atob(encoded);
    
    // Reverse XOR with the same static salt
    return decodedXor.split('').map((char, i) => {
      return String.fromCharCode(char.charCodeAt(0) ^ OBFS_KEY.charCodeAt(i % OBFS_KEY.length));
    }).join('');
  } catch (e) {
    return "";
  }
}
