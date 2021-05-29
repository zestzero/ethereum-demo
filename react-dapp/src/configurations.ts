export class Configurations {
    private static _instance:Configurations = new Configurations();
    private _token: string = "";
    private _walletAddress: string = "";

    constructor() {
        if(Configurations._instance){
            throw new Error("Error: Instantiation failed: Use Configurations.getInstance() instead of new.");
        }
        this._token = process.env.REACT_APP_ETH_TOKEN || "";
        this._walletAddress = process.env.REACT_APP_MY_WALLET || "";
        Configurations._instance = this;
    }

    public static getInstance():Configurations
    {
        return Configurations._instance;
    }

    public getToken(): string {
        return this._token;
    }

    public getWalletAddress(): string {
        return this._walletAddress;
    }
}
