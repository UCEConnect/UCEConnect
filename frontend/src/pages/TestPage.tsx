import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="mb-6 text-3xl font-bold">
        UCEConnect Design Preview
      </h1>

      {/* Typography */}

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Typography
        </h2>

        <h1 className="text-3xl font-bold">
          Dashboard Title
        </h1>

        <h2 className="mt-4 text-xl font-semibold">
          Section Title
        </h2>

        <p className="mt-4">
          This is an example of regular text used in the application.
        </p>

        <p className="mt-2 text-sm text-textSecondary">
          Last updated: June 2026
        </p>

        <p className="mt-4 font-mono">
          INC-2026-001
        </p>
      </Card>

      {/* Colors */}

      <Card className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">
          Colors
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="rounded-lg bg-primary p-4 text-white">
            Primary
          </div>

          <div className="rounded-lg bg-accent p-4 text-white">
            Accent
          </div>

          <div className="rounded-lg bg-success p-4 text-white">
            Success
          </div>

          <div className="rounded-lg bg-warning p-4 text-white">
            Warning
          </div>

          <div className="rounded-lg bg-danger p-4 text-white">
            Danger
          </div>
        </div>
      </Card>

      {/* Buttons */}

      <Card className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">
          Buttons
        </h2>

        <div className="flex gap-3">
          <Button>
            Submit
          </Button>

          <Button variant="secondary">
            Review
          </Button>

          <Button variant="danger">
            Reject
          </Button>
        </div>
      </Card>

      {/* Inputs */}

      <Card className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">
          Inputs
        </h2>

        <div className="space-y-4">
          <Input placeholder="Student ID" />

          <Input placeholder="Institutional Email" />
        </div>
      </Card>

      {/* Status */}

      <Card className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">
          Incident Status
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-primary px-4 py-2 text-white">
            Open
          </span>

          <span className="rounded-full bg-warning px-4 py-2 text-white">
            In Progress
          </span>

          <span className="rounded-full bg-success px-4 py-2 text-white">
            Resolved
          </span>

          <span className="rounded-full bg-danger px-4 py-2 text-white">
            Rejected
          </span>
        </div>
      </Card>
    </div>
  );
}

export default TestPage;