
import { SignIn } from "@clerk/nextjs";



const SignInPage = () => {
    return (
        <div className="justify-center flex max-h-screen p-6">
            <SignIn />
            <p>This is Sign In page</p>
        </div>
    );
};

export default SignInPage;