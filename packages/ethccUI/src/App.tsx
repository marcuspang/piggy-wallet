import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ChildsHome from "./pages/ChildsHome";
import ChildsTasks2 from "./pages/ChildsTasks2";
import ChildsTasks1 from "./pages/ChildsTasks1";
import ParentsSendFeature from "./pages/ParentsSendFeature";
import ParentsSendFeature1 from "./pages/ParentsSendFeature11";
import OnboardingSignUpScreen from "./pages/OnboardingSignUpScreen";
import OnboardingSignUpScreen1 from "./pages/OnboardingSignUpScreen1";
import ParentsSendFeature2 from "./pages/ParentsSendFeature2";
import ParentsGoalsSeeAll1 from "./pages/ParentsGoalsSeeAll1";
import ParentsGoalsSeeAll2 from "./pages/ParentsGoalsSeeAll2";
import ParentsHomeSeeAll2 from "./pages/ParentsHomeSeeAll2";
import ParentsHomeSeeAll3 from "./pages/ParentsHomeSeeAll3";
import OnboardingSignUpScreen5 from "./pages/OnboardingSignUpScreen5";
import ParentsSendFeature21 from "./pages/ParentsSendFeature21";
import ParentsSendFeature3 from "./pages/ParentsSendFeature3";
import ParentsSendFeature5 from "./pages/ParentsSendFeature5";
import ParentsSendFeature4 from "./pages/ParentsSendFeature4";
import ChildsTasks from "./pages/ChildsTasks";
import OnboardingSignUpScreen2 from "./pages/OnboardingSignUpScreen2";
import ParentsGoalsSeeAll4 from "./pages/ParentsGoalsSeeAll4";
import ParentsGoalsSeeAll3 from "./pages/ParentsGoalsSeeAll3";
import ParentsHomeSeeAll21 from "./pages/ParentsHomeSeeAll21";
import ChildsQRCode from "./pages/ChildsQRCode";
import ParentsGoalsSeeAll21 from "./pages/ParentsGoalsSeeAll21";
import OnboardingLoginScreen from "./pages/OnboardingLoginScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Home Page";
        break;
      case "/parents-send-feature":
        title = "Parents Send Feature";
        metaDescription = "Parents Send Feature Page";
        break;
      case "/childs-tasks":
        title = "Child's Tasks";
        metaDescription = "Child's Tasks Page";
        break;
      case "/childs-tasks1":
        title = "Child's Tasks 1";
        metaDescription = "Child's Tasks 1 Page";
        break;
      case "/parents-send-feature1":
        title = "Parents Send Feature 1";
        metaDescription = "Parents Send Feature 1 Page";
        break;
      case "/parents-send-feature2":
        title = "Parents Send Feature 2";
        metaDescription = "Parents Send Feature 2 Page";
        break;
      case "/onboarding-sign-up-screen":
        title = "Onboarding Sign Up";
        metaDescription = "Onboarding Sign Up Page";
        break;
      case "/onboarding-sign-up-screen1":
        title = "Onboarding Sign Up 1";
        metaDescription = "Onboarding Sign Up 1 Page";
        break;
      case "/parents-send-feature3":
        title = "Parents Send Feature 3";
        metaDescription = "Parents Send Feature 3 Page";
        break;
      case "/parents-goals-see-all":
        title = "Parents Goals See All";
        metaDescription = "Parents Goals See All Page";
        break;
      case "/parents-goals-see-all1":
        title = "Parents Goals See All 1";
        metaDescription = "Parents Goals See All 1 Page";
        break;
      case "/parents-home-see-all":
        title = "Parents Home See All";
        metaDescription = "Parents Home See All Page";
        break;
      case "/parents-home-see-all1":
        title = "Parents Home See All 1";
        metaDescription = "Parents Home See All 1 Page";
        break;
      case "/onboarding-sign-up-screen2":
        title = "Onboarding Sign Up 2";
        metaDescription = "Onboarding Sign Up 2 Page";
        break;
      case "/parents-send-feature4":
        title = "Parents Send Feature 4";
        metaDescription = "Parents Send Feature 4 Page";
        break;
      case "/parents-send-feature5":
        title = "Parents Send Feature 5";
        metaDescription = "Parents Send Feature 5 Page";
        break;
      case "/parents-send-feature6":
        title = "Parents Send Feature 6";
        metaDescription = "Parents Send Feature 6 Page";
        break;
      case "/parents-send-feature7":
        title = "Parents Send Feature 7";
        metaDescription = "Parents Send Feature 7 Page";
        break;
      case "/childs-tasks2":
        title = "Child's Tasks 2";
        metaDescription = "Child's Tasks 2 Page";
        break;
      case "/onboarding-sign-up-screen3":
        title = "Onboarding Sign Up 3";
        metaDescription = "Onboarding Sign Up 3 Page";
        break;
      case "/parents-goals-see-all2":
        title = "Parents Goals See All 2";
        metaDescription = "Parents Goals See All 2 Page";
        break;
      case "/parents-goals-see-all3":
        title = "Parents Goals See All 3";
        metaDescription = "Parents Goals See All 3 Page";
        break;
      case "/parents-home-see-all2":
        title = "Parents Home See All 2";
        metaDescription = "Parents Home See All 2 Page";
        break;
      case "/childs-qr-code":
        title = "Child's QR Code";
        metaDescription = "Child's QR Code Page";
        break;
      case "/parents-goals-see-all4":
        title = "Parents Goals See All 4";
        metaDescription = "Parents Goals See All 4 Page";
        break;
      case "/onboarding-login-screen":
        title = "Onboarding Login";
        metaDescription = "Onboarding Login Page";
        break;
      default:
        title = "Page Not Found";
        metaDescription = "Page Not Found";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector<HTMLMetaElement>(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ChildsHome />} />
      <Route path="/parents-send-feature" element={<ParentsSendFeature />} />
      <Route path="/childs-tasks" element={<ChildsTasks2 />} />
      <Route path="/childs-tasks1" element={<ChildsTasks1 />} />
      <Route path="/parents-send-feature1" element={<ParentsSendFeature1 />} />
      <Route path="/parents-send-feature2" element={<ParentsSendFeature2 />} />
      <Route
        path="/onboarding-sign-up-screen"
        element={<OnboardingSignUpScreen />}
      />
      <Route
        path="/onboarding-sign-up-screen1"
        element={<OnboardingSignUpScreen1 />}
      />
      <Route path="/parents-send-feature3" element={<ParentsSendFeature3 />} />
      <Route path="/parents-goals-see-all" element={<ParentsGoalsSeeAll1 />} />
      <Route path="/parents-goals-see-all1" element={<ParentsGoalsSeeAll2 />} />
      <Route path="/parents-home-see-all" element={<ParentsHomeSeeAll2 />} />
      <Route path="/parents-home-see-all1" element={<ParentsHomeSeeAll3 />} />
      <Route
        path="/onboarding-sign-up-screen2"
        element={<OnboardingSignUpScreen2 />}
      />
      <Route path="/parents-send-feature4" element={<ParentsSendFeature4 />} />
      <Route path="/parents-send-feature5" element={<ParentsSendFeature5 />} />
      <Route path="/parents-send-feature6" element={<ParentsSendFeature21 />} />
      <Route path="/parents-send-feature7" element={<ParentsSendFeature2 />} />
      <Route path="/childs-tasks2" element={<ChildsTasks />} />
      <Route
        path="/onboarding-sign-up-screen3"
        element={<OnboardingSignUpScreen2 />}
      />
      <Route path="/parents-goals-see-all2" element={<ParentsGoalsSeeAll4 />} />
      <Route path="/parents-goals-see-all3" element={<ParentsGoalsSeeAll3 />} />
      <Route path="/parents-home-see-all2" element={<ParentsHomeSeeAll21 />} />
      <Route path="/childs-qr-code" element={<ChildsQRCode />} />
      <Route path="/parents-goals-see-all4" element={<ParentsGoalsSeeAll21 />} />
      <Route
        path="/onboarding-login-screen"
        element={<OnboardingLoginScreen />}
      />
    </Routes>
  );
}

export default App;
