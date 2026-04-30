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
    <div
      style={{
        padding: "30px",
        fontFamily: "Inter",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#1e293b" }}>🚀 AI CRM HCP Module</h1>

      <h2 style={{ color: "#334155" }}>
        Healthcare Professional Interaction System
      </h2>

      {/* Toggle Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setMode("form")}
          style={{
            padding: "10px 18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Structured Form
        </button>

        <button
          onClick={() => setMode("chat")}
          style={{
            marginLeft: "10px",
            padding: "10px 18px",
            backgroundColor: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Conversational Chat
        </button>
      </div>

      {/* Structured Form */}
      {mode === "form" && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            width: "650px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#1e293b" }}>
            📝 Log HCP Interaction
          </h3>

          <input
            type="text"
            placeholder="Enter HCP Name"
            value={hcpName}
            onChange={(e) => setHcpName(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
            }}
          />

          <br />

          <input
            type="text"
            placeholder="Enter Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
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
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
            }}
          />

          <br />
          <br />

          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#16a34a",
              color: "white",
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit Interaction
          </button>

          {/* AI Response */}
          {response && (
            <div style={{ marginTop: "30px" }}>
              <h3 style={{ color: "#1e293b" }}>
                🤖 AI Generated Response
              </h3>

              <div
                style={{
                  background: "#0f172a",
                  color: "white",
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
              <h3 style={{ color: "#1e293b" }}>
                ✏️ Edit Existing Interaction
              </h3>

              <textarea
                placeholder="Example: Change meeting outcome to product demo completed"
                rows="4"
                value={updateRequest}
                onChange={(e) => setUpdateRequest(e.target.value)}
                style={{
                  width: "500px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #cbd5e1",
                }}
              />

              <br />
              <br />

              <button
                onClick={handleEdit}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "10px 18px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Edit Existing Interaction
              </button>

              {editResponse && (
                <div style={{ marginTop: "20px" }}>
                  <h3 style={{ color: "#1e293b" }}>
                    ✅ Edited Interaction Result
                  </h3>

                  <div
                    style={{
                      background: "#0f172a",
                      color: "white",
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
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            width: "650px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#1e293b" }}>
            💬 Conversational AI Chat
          </h3>

          <textarea
            placeholder="Chat with AI Agent here..."
            rows="8"
            style={{
              width: "500px",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
            }}
          />

          <br />
          <br />

          <button
            style={{
              backgroundColor: "#7c3aed",
              color: "white",
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </div>
      )}
    </div>
  );
}

export default App;