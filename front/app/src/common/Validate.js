export default class Validate {
    constructor() {
        this.passwordStr = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        this.emailStr = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    }

    /**
     * ユーザ名の入力チェック
     * @param {*}} param 
     */
    username(param) {
        let errorMessage = [];
        let requiredResult = this._required(param, "＊ユーザ名は入力必須です");
        if(!requiredResult.state) {
            errorMessage.push(requiredResult.message);
        }
        return errorMessage;
    }

    /**
     * メールアドレスの入力チェック
     * @param {*} param 
     */
    email(param) {
        let errorMessage = [];
        let requiredResult = this._required(param, "＊メールアドレスは入力必須です");
        let regResult = this._emailReg(param, '＊メールアドレスを入力してください')
        if(!requiredResult.state) {
            errorMessage.push(requiredResult.message);
        }
        if(!regResult.state) {
            errorMessage.push(regResult.message);
        }
        return errorMessage;
    }

    /**
     * パスワードの入力チェック
     * @param {*} param 
     */
    password(param) {
        let errorMessage = [];
        let requiredResult = this._required(param, "＊パスワードは入力必須です");
        let regResult = this._passwordReg(param, '＊８文字以上で半角英数字を含んでください')
        if(!requiredResult.state) {
            errorMessage.push(requiredResult.message);
        }
        if(!regResult.state) {
            errorMessage.push(regResult.message);
        }
        return errorMessage;
    }

    /**
     * 確認用パスワードの入力チェック
     * @param {*} password 
     * @param {*} passwordCheck 
     */
    passwordCheck(password, passwordCheck) {
        let errorMessage = [];
        let regResult = this._passwordCheckReg(password, passwordCheck,'＊パスワードが一致しません')
        if(!regResult.state) {
            errorMessage.push(regResult.message);
        }
        return errorMessage;
    }

    /**
     * 入力値の空チェック
     * @param {*} param 
     * @param {*} message 
     */
    _required(param, message) {
        if(param === "" || param === null || param === undefined) {
            return { message: message, state: false };
        }
        return { message: '', state: true };
    }

    /**
     * メールアドレスの正規表現チェック
     * @param {*} email 
     * @param {*} message 
     */
    _emailReg(email, message) {
        const reg = new RegExp(this.emailStr);
        if(reg.test(email)) {
            return { message: '', state: true };
        } 
        return { message: message, state: false };;
    }

    /**
     * パスワードの正規表現チェック
     * @param {*} password 
     * @param {*} message 
     */
    _passwordReg(password, message) {
        const reg = new RegExp(this.passwordStr);
        if(reg.test(password)) {
            return { '': message, state: ture };
        } 
        return { message: message, state: false };
    }

    /**
     * パスワードと確認用パスワードの一致チェック
     * @param {*} password 
     * @param {*} passwordCheck 
     * @param {*} message 
     */
    _passwordCheckReg(password, passwordCheck, message) {
        if(password === passwordCheck) {
            return { message: '', state: true };
        } 
        return { message: message, state: false };
    }
}