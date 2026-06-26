/**
 * googleSheetApi.js
 * -----------------
 * Service layer for submitting internship application data
 * to a Google Sheet via a published Google Apps Script Web App endpoint.
 *
 * HOW TO SET UP YOUR GOOGLE SHEET:
 * 1. Open a new Google Sheet at https://sheets.google.com
 * 2. Go to Extensions → Apps Script
 * 3. Paste the Apps Script code (see bottom of this file for reference)
 * 4. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and paste it into the SHEET_ENDPOINT constant below.
 */

// ─── Configuration ──────────────────────────────────────────────────────────

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby5fr4HTiCEfT7K8d1UfGhkIh7-TRr2q-zMrCWQT1BfWdA-unfhdFFOKQeM9dDIYOA/exec";

export default GOOGLE_SCRIPT_URL;

/** @internal — used by the functions below */
const SHEET_ENDPOINT = GOOGLE_SCRIPT_URL;

// ─── Main API Functions ──────────────────────────────────────────────────────

/**
 * Submits an internship application entry to the linked Google Sheet.
 *
 * @param {Object} applicationData - The form data to submit.
 * @param {string} applicationData.name        - Applicant's full name.
 * @param {string} applicationData.email       - Applicant's email address.
 * @param {string} applicationData.phone       - Applicant's phone number.
 * @param {string} applicationData.college     - College/university name.
 * @param {string} applicationData.department  - Department/branch.
 * @param {string} applicationData.year        - Year of study.
 * @param {string} applicationData.linkedin    - LinkedIn profile URL.
 * @param {string} applicationData.github      - GitHub profile URL.
 * @param {string} [applicationData.portfolio] - Portfolio URL (optional).
 * @param {string} applicationData.domain      - Internship domain selected.
 * @param {string} applicationData.reason      - Reason for applying.
 * @param {string} [applicationData.resumeUrl] - Uploaded resume URL (optional).
 *
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitToGoogleSheet(applicationData) {
  if (!SHEET_ENDPOINT) {
    console.warn(
      "[googleSheetApi] NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT is not set. Skipping sheet submission."
    );
    return { success: false, message: "Google Sheet endpoint not configured." };
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name:       applicationData.name        || "",
      email:      applicationData.email       || "",
      phone:      applicationData.phone       || "",
      college:    applicationData.college     || "",
      department: applicationData.department  || "",
      year:       applicationData.year        || "",
      linkedin:   applicationData.linkedin    || "",
      github:     applicationData.github      || "",
      portfolio:  applicationData.portfolio   || "",
      domain:     applicationData.domain      || "",
      reason:     applicationData.reason      || "",
      resumeUrl:  applicationData.resumeUrl   || "",
    };

    // Google Apps Script Web Apps only accept `no-cors` or same-origin from
    // a browser. We use `no-cors` to avoid CORS errors — the response will
    // be opaque, so we handle success optimistically after the request resolves.
    await fetch(SHEET_ENDPOINT, {
      method:  "POST",
      mode:    "no-cors",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    // Because mode is `no-cors`, a resolved promise means the request was sent.
    return { success: true, message: "Application data sent to Google Sheet." };
  } catch (error) {
    console.error("[googleSheetApi] Failed to submit to Google Sheet:", error);
    return {
      success:  false,
      message:  error?.message || "Failed to reach the Google Sheet endpoint.",
    };
  }
}

/**
 * Fetches all application entries from the Google Sheet.
 * Note: Your Apps Script must implement a `doGet` handler that returns JSON.
 *
 * @returns {Promise<{ success: boolean, data: Array, message?: string }>}
 */
export async function fetchFromGoogleSheet() {
  if (!SHEET_ENDPOINT) {
    return { success: false, data: [], message: "Google Sheet endpoint not configured." };
  }

  try {
    const response = await fetch(SHEET_ENDPOINT, { method: "GET" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data: data?.entries || data || [] };
  } catch (error) {
    console.error("[googleSheetApi] Failed to fetch from Google Sheet:", error);
    return {
      success:  false,
      data:     [],
      message:  error?.message || "Failed to fetch data from Google Sheet.",
    };
  }
}

// ─── Apps Script Reference ───────────────────────────────────────────────────
//
// Paste this into your Google Apps Script editor:
//
// const SHEET_NAME = "Applications";
//
// function doPost(e) {
//   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
//               || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//
//   // Write header row if sheet is empty
//   if (sheet.getLastRow() === 0) {
//     sheet.appendRow([
//       "Timestamp", "Name", "Email", "Phone", "College",
//       "Department", "Year", "LinkedIn", "GitHub", "Portfolio",
//       "Domain", "Reason", "Resume URL"
//     ]);
//   }
//
//   const data = JSON.parse(e.postData.contents);
//   sheet.appendRow([
//     data.timestamp, data.name, data.email, data.phone, data.college,
//     data.department, data.year, data.linkedin, data.github, data.portfolio,
//     data.domain, data.reason, data.resumeUrl
//   ]);
//
//   return ContentService
//     .createTextOutput(JSON.stringify({ result: "success" }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
//
// function doGet(e) {
//   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
//               || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   const rows = sheet.getDataRange().getValues();
//   const headers = rows[0];
//   const entries = rows.slice(1).map(row =>
//     Object.fromEntries(headers.map((h, i) => [h, row[i]]))
//   );
//   return ContentService
//     .createTextOutput(JSON.stringify({ entries }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
