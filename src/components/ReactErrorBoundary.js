//ReactErrorBoundary comes from: https://semaphoreci.com/blog/error-handling-layer-react
import ErrorPage from "../pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

export default function ReactErrorBoundary(props) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        console.log("Error caught!");
        console.error(error);
        console.error(errorInfo);

        // record the error in an APM tool...
      }}
      onReset={() => {
        // reloading the page to restore the initial state
        // of the current page
        console.log("reloading the page...");
        window.location.reload();

        // other reset logic...
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}
