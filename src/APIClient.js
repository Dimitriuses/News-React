/**
 * The 2019 newsapi.org client, still working, but no longer carrying a key.
 *
 * The original built its URL from two hardcoded fields:
 *
 *   _baseURL = "https://newsapi.org/v2/top-headlines?country=";
 *   _apiKEY  = "&apiKey=<32 hex characters>";
 *
 * That key was committed on 2019-09-30 and was still returning live data in 2026. It has
 * been removed here, but it could NOT be revoked -- the account is no longer reachable.
 * See the README. Supply your own key to fetch live headlines:
 *
 *   new APIClient("your-key-here").getTopHeadlines("us")
 *
 * With no key, the app falls back to src/newsSnapshot.js -- see loadNews() in App.js.
 */
class APIClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://newsapi.org/v2/top-headlines";
  }

  async getTopHeadlines(country) {
    const url =
      `${this.baseURL}?country=${encodeURIComponent(country)}` +
      `&apiKey=${encodeURIComponent(this.apiKey)}`;

    const response = await fetch(url);
    if (!response.ok) {
      // The 2019 version threw new Error("Cannot data") here, which told you nothing.
      throw new Error(`newsapi.org returned ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
}

export default APIClient;
