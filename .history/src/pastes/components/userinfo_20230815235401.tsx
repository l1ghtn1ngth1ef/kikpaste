const UserInfo = () => {
    const currentUser = useCurrentUser()
    const [logoutMutation] = useMutation(logout)
  
    if (currentUser) {
      return (
        <>
          <button
            className={styles.button}
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </button>
          <div>
            User id: <code>{currentUser.id}</code>
            <br />
            User role: <code>{currentUser.role}</code>
          </div>
        </>
      )
    } else {
      return (
        <>
          <Link href={Routes.SignupPage()} className={styles.button}>
            <strong>Sign Up</strong>
          </Link>
          <Link href={Routes.LoginPage()} className={styles.loginButton}>
            <strong>Login</strong>
          </Link>
        </>
      )
    }
  }