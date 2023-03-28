const TOKENS_LS_NAME = 'tokens';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const tokenService = {
  getToken: (): Tokens | null => {
    const tokensStr = localStorage.getItem(TOKENS_LS_NAME);
    return tokensStr ? JSON.parse(tokensStr) : null;
  },
  getRefreshToken: (): string | undefined => {
    const tokens = tokenService.getToken();
    return tokens?.refreshToken;
  },
  getAccessToken: (): string | undefined => {
    const tokens = tokenService.getToken();
    return tokens?.accessToken;
  },
  updateTokens: (tokens: Tokens): void => {
    localStorage.setItem(TOKENS_LS_NAME, JSON.stringify(tokens));
  },
  updateAccessTokens: (accessToken: string): void => {
    const tokens = tokenService.getToken();
    if (tokens) {
      tokens.accessToken = accessToken;
      tokenService.updateTokens(tokens);
    }
  },
  removeTokens: (): void => {
    localStorage.removeItem(TOKENS_LS_NAME);
  },
};
