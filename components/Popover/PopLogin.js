import PopContainer from './Container';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const PopLogin = ({open}) => {
    const [session, loading] = useSession();
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    const loginForm = (
        <form onSubmit={onSubmitHandler} className="container p-8">
                <div className="w-full py-4">
                    <label className="text-gray-500 text-sm pb-1">Phone Number</label>
                    <input   type="text" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">Phone nubmer should be 11 digit number</p>
                </div>
                <div className="w-full pb-5">
                    <label className="text-gray-500 pb-1 text-sm">Password</label>
                    <input  type="password" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">Password should stay letter and numeric</p>
                </div>
                <div className="w-full py-2 text-center">
                    <button onClick={() => alert("Password login doesn't added yet.")} type="submit" className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                        login
                    </button>
                </div>
                <div className="w-full py-2 text-center">
                    <button onClick={() => signIn('google')} className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                        Sign in with Google
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Don't have an account? 
                        <Link href="/signup" >
                            <a className="text-red-500"> Sign up</a>
                        </Link>
                    </p>
                </div>
                <div className="w-full text-center py-2 text-red-500">
                    <Link href="/forgot-password" >Forgot Password</Link>
                </div>
            </form>
    );
    return (
        <PopContainer open={open} title={"Login"}>
            {
                session ? 
                <>
                    <div className="w-full min-h-full flex justify-center items-center">
                        <button onClick={() => signOut()} className="py-5 px-10 bg-red-500 my-10 focus:outline-none rounded-lg text-white">Sign Out</button>
                    </div>
                </>:
                loginForm
            }
        </PopContainer>
    )
};


export default PopLogin;