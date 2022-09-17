const CheckBtn = ({ size }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1.15em"
      width="1.15em"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:text-xs"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
    </svg>
  );
};

const DeleteBtn = ({ size }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1.15em"
      width="1.15em"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:text-xs"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      ></path>
    </svg>
  );
};

const EditBtn = ({ size }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 44 44"
      height="1.15em"
      width="1.15em"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:text-xs"
    >
      <path d="M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z" />
    </svg>
  );
};

const LogoutBtn = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      height={size}
      width={size}
    >
      <path
        fill="#546e7a"
        d="M32 53.46a19.42 19.42 0 0 1-7.3-37.41 1.5 1.5 0 1 1 1.12 2.78A16.42 16.42 0 1 0 40 48.4a1.5 1.5 0 1 1 1.43 2.6A19.4 19.4 0 0 1 32 53.46zm13.19-5.79a1.53 1.53 0 0 1-1-.39 1.5 1.5 0 0 1-.09-2.12 16.42 16.42 0 0 0-5.9-26.33 1.5 1.5 0 1 1 1.12-2.78 19.41 19.41 0 0 1 7 31.14 1.49 1.49 0 0 1-1.13.48z"
      />
      <path
        fill="#ef5350"
        d="M32 32.2a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 3 0v18.7a1.5 1.5 0 0 1-1.5 1.5Z"
      />
    </svg>
  );
};

const User = ({ size }) => {
  return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" height={size} width={size}><path fill="#231f20" d="M7.763 2A6.77 6.77 0 0 0 1 8.763c0 1.807.703 3.505 1.98 4.782a6.718 6.718 0 0 0 4.783 1.981 6.77 6.77 0 0 0 6.763-6.763A6.77 6.77 0 0 0 7.763 2ZM3.675 13.501a5.094 5.094 0 0 1 3.958-1.989c.024.001.047.007.071.007h.023c.022 0 .042-.006.064-.007a5.087 5.087 0 0 1 3.992 2.046 6.226 6.226 0 0 1-4.02 1.468 6.212 6.212 0 0 1-4.088-1.525zm4.032-2.494c-.025 0-.049.004-.074.005a2.243 2.243 0 0 1-2.167-2.255 2.246 2.246 0 0 1 2.262-2.238 2.246 2.246 0 0 1 2.238 2.262c0 1.212-.97 2.197-2.174 2.232-.028-.001-.056-.006-.085-.006Zm4.447 2.215a5.594 5.594 0 0 0-3.116-2.052 2.749 2.749 0 0 0 1.428-2.412A2.747 2.747 0 0 0 7.704 6.02a2.747 2.747 0 0 0-2.738 2.762 2.73 2.73 0 0 0 1.422 2.386 5.602 5.602 0 0 0-3.081 1.995 6.22 6.22 0 0 1-1.806-4.398 6.27 6.27 0 0 1 6.263-6.263 6.27 6.27 0 0 1 6.263 6.263 6.247 6.247 0 0 1-1.873 4.457z"/></svg>
  );
};

const Icon = ({ name, size }) => {
  const icons = {
    check: CheckBtn,
    delete: DeleteBtn,
    edit: EditBtn,
    logout: LogoutBtn,
    user: User,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
