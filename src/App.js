import "./App.css";
import DialogueBox from "./components/DialogueBox";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="App-header">
          <DialogueBox />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
