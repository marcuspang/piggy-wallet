"use client";

import { useState } from "react";
import OnboardingSignUpScreen1 from "~~/app/OnboardingSignUpScreen1";
import OnboardingSignUpScreen2 from "~~/app/OnboardingSignUpScreen2";
import OnboardingSignUpScreen3 from "~~/app/OnboardingSignUpScreen3";
import OnboardingSignUpScreenComplete from "~~/app/OnboardingSignUpScreenComplete";

const SetupPage = () => {
  const [childrenCount, setChildrenCount] = useState(0);
  const [birthday, setBirthday] = useState(new Date("01/01/2000").toDateString());
  const [email, setEmail] = useState("jane.doe@gmail.com");
  const [name, setName] = useState("Jane Doe");
  const [stage, setStage] = useState(0);

  if (stage === 0) {
    return (
      <OnboardingSignUpScreen1
        nextStage={count => {
          setChildrenCount(count);
          setStage(prev => prev + 1);
        }}
      />
    );
  } else if (stage === 1) {
    return (
      <OnboardingSignUpScreen2
        nextStage={(name, birthday, email) => {
          setName(name);
          setBirthday(birthday);
          setEmail(email);
          setStage(prev => prev + 1);
        }}
      />
    );
  } else if (stage === 2) {
    return (
      <OnboardingSignUpScreen3
        values={[{ name, birthday, email }]}
        nextStage={() => {
          setStage(prev => prev + 1);
        }}
      />
    );
  } else if (stage === 3) {
    return <OnboardingSignUpScreenComplete />;
  }
};

export default SetupPage;
