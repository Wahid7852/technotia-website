export default function Rules() {
  return (
    <div className="max-w-4xl mx-auto relative">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-300 minimal-glow">Intergalactic Rules & Regulations</h2>
      <div className="space-y-6 text-blue-200">
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-yellow-300">General Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>All participants must register before the event deadline.</li>
            <li>Participants should carry a valid college ID card.</li>
            <li>Decision of the judges will be final and binding.</li>
            <li>Use of unfair means will lead to disqualification.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Event-Specific Rules</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-green-300">Galactic Tech Quiz</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Teams of 2 members each.</li>
                <li>Multiple choice and rapid-fire rounds.</li>
                <li>Use of electronic devices is strictly prohibited.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-green-300">Cosmic Code Debugging</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Individual participation.</li>
                <li>Time limit: 60 minutes.</li>
                <li>Languages allowed: C, C++, Java, Python.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-green-300">Space Battle Royale: BGMI</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Squad matches (4 players per team).</li>
                <li>Participants must bring their own devices.</li>
                <li>Use of emulators or hacks will result in disqualification.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Code of Conduct</h3>
          <p>All participants are expected to maintain decorum and show respect to fellow participants, organizers, and judges. Any form of misconduct will not be tolerated and may lead to disqualification.</p>
        </section>
      </div>
    </div>
  )
}

