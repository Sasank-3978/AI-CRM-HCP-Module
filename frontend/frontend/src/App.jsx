import { useState } from "react";
import axios from "axios";

function App() {
  const [mode, setMode] = useState("form");

  const [hcpName, setHcpName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const [updateRequest, setUpdateRequest] = useState("");
  const [editResponse, setEditResponse] = useState("");

  // Submit Interaction
  const handleSubmit = async () => {
    const fullInput = `
HCP Name: ${hcpName}
Hospital Name: ${hospitalName}
Interaction Details: ${input}
`;

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/log-interaction",
        null,
        {
          params: {
            user_input: fullInput,
          },
        }
      );

      setResponse(res.data.ai_response);
    } catch (error) {
      console.error(error);
      setResponse("Backend connection failed");
    }
  };

  // Edit Interaction
  const handleEdit = async () => {
    const existingData = `
HCP Name: ${hcpName}
Hospital Name: ${hospitalName}
Interaction Details: ${input}
`;

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/edit-interaction",
        null,
        {
          params: {
            existing_data: existingData,
            update_request: updateRequest,
          },
        }
      );

      setEditResponse(
        res.data.edit_response?.status ||
          "Interaction updated successfully"
      );
    } catch (error) {
      console.error(error);
      setEditResponse("Edit interaction failed");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Inter" }}>
      <h1>AI CRM HCP Module</h1>
      <h2>Log Interaction Screen</h2>

      {/* Toggle Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setMode("form")}>
          Structured Form
        </button>

        <button
          onClick={() => setMode("chat")}
          style={{ marginLeft: "10px" }}
        >
          Conversational Chat
        </button>
      </div>

      {/* Structured Form */}
      {mode === "form" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Structured Form</h3>

          <input
            type="text"
            placeholder="Enter HCP Name"
            value={hcpName}
            onChange={(e) => setHcpName(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <br />

          <input
            type="text"
            placeholder="Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <br />

          <textarea
            placeholder="Enter interaction details..."
            rows="6"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: "500px",
              padding: "10px",
            }}
          />

          <br />
          <br />

          <button onClick={handleSubmit}>
            Submit Interaction
          </button>

          {/* AI Response */}
          {response && (
            <div style={{ marginTop: "30px" }}>
              <h3>AI Response</h3>

              <div
                style={{
                  background: "#1f1f1f",
                  padding: "20px",
                  borderRadius: "10px",
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  width: "600px",
                }}
              >
                {response}
              </div>

              <br />

              {/* Edit Section */}
              <h3>Edit Interaction</h3>

              <textarea
                placeholder="Enter update request..."
                rows="4"
                value={updateRequest}
                onChange={(e) => setUpdateRequest(e.target.value)}
                style={{
                  width: "500px",
                  padding: "10px",
                }}
              />

              <br />
              <br />

              <button onClick={handleEdit}>
                Update Interaction
              </button>

              {editResponse && (
                <div style={{ marginTop: "20px" }}>
                  <h3>Updated Response</h3>

                  <div
                    style={{
                      background: "#1f1f1f",
                      padding: "20px",
                      borderRadius: "10px",
                      whiteSpace: "pre-wrap",
                      lineHeight: "1.6",
                      width: "600px",
                    }}
                  >
                    {editResponse}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Chat Interface */}
      {mode === "chat" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Conversational Chat</h3>

          <textarea
            placeholder="Chat with AI Agent here..."
            rows="8"
            style={{
              width: "500px",
              padding: "10px",
            }}
          />

          <br />
          <br />

          <button>Send Message</button>
        </div>
      )}
    </div>
  );
}

export default App;