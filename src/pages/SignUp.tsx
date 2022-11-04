import { SyntheticEvent } from 'react';

export function SignUp() {
  function handleSubmit(event: SyntheticEvent) {
    console.log(event);
  }

  return (
    <>
      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>
        <input type="" name="email" />
        <input type="" name="password" />
      </form>
    </>
  );
}
