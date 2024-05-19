import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center text-center ">
        <div>

          <h2 className="h1 mb-3 text-light">Register</h2>
        </div>
        <div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
