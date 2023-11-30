export class User {
  // Dati necessari per inizializzare un nuovo oggetto user - new User (tutti i parametri seguenti)
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expirationDate: Date
  ) {}

  // Funzione per verificare se il token è ancora valido
  get token() {
    // Se l'expiration Date è null + se la data odierna è oltre la data di expiration Date
    if (!this._expirationDate || new Date() > this._expirationDate) {
      // Restituisci null
      return null;
    }
    // Se il controllo precedente fallisce, restuiscimi il token (valido)
    return this._token;
  }
}
