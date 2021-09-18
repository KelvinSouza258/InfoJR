import users from './users';
import { FormEvent, MouseEvent } from 'react';
import { useCookies } from 'react-cookie';

const useLogin = (
    showLoginMsg: (
        show: 'show' | 'hide',
        success?: 'success' | 'error'
    ) => void,
    email: string,
    password: string
) => {
    const [, setCookies] = useCookies(['token']);

    const timer = (ms: number) => {
        const timeout = new Promise((resolve) => setTimeout(resolve, ms));
        return timeout;
    };

    const handleLogin = async (
        e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();

        window.scrollTo(0, document.body.scrollHeight);
        const user = users.find((user) => user.email === email.toLowerCase());

        if (user) {
            if (user.password === password) {
                showLoginMsg('show', 'success');
                await timer(3000);
                setCookies('token', window.btoa(user.id), {
                    expires: new Date(9999, 0, 1),
                });
                window.location.reload();
            } else {
                showLoginMsg('show', 'error');
                await timer(3000);
                showLoginMsg('hide');
            }
        } else {
            showLoginMsg('show', 'error');
            await timer(3000);
            showLoginMsg('hide');
        }
    };

    return handleLogin;
};

export default useLogin;
