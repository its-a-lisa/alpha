import * as React from "react";
import { PlasmicAuth, DefaultAuthProps } from "./plasmic/alpha/PlasmicAuth";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

export interface AuthProps extends DefaultAuthProps {}

function Auth_(props: AuthProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <PlasmicAuth
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError.message}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async () => {
          setLoading(true);
          setAuthError("");
          try {
            let authFunction = null;
            if (props.isSignUpFlow) {
              authFunction = await supabase.auth.signUp({ email, password });
            } else {
              authFunction = await supabase.auth.signInWithPassword({
                email,
                password,
              });
            }
            const { error } = authFunction;
            if (error) {
              setAuthError(error as unknown as string);
              setLoading(false);
              return
            }
            router.replace("/");
          } catch (error) {
            setAuthError(error as string);
          } finally {
            setLoading(false);
          }
        },
      }}
    />
  );
}

const Auth = React.forwardRef(Auth_);
export default Auth;
