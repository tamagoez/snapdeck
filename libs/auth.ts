import { supabase } from "../utils/supabaseClient";
import { errorToast, successToast } from "../components/toast";

export async function signInWithEmail(email: string, password: string) {
    try {
        const { user, error } = await supabase.auth.signIn({
            email: email,
            password: password,
        });
        if (error) throw error;
        successToast("SignIn Successed", "", 5000, true);
        return true;
    } catch (error: any) {
        console.error(error);
        errorToast("SignIn Failed", error.message, 7000, true);
        return false;
    }
}

export async function signUpWithEmail(email: string, password: string) {
    try {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) throw error;
        successToast("Check your mail", "We sent confirm page to your email address.", 10000, true)
        return true;
    } catch (error: any) {
        console.error(error);
        errorToast("SignIn Failed", error.message, 7000, true);
        return false;
    }
}

export async function signInWithTwitter() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'twitter',
    })
}