import SwiftUI

public struct ContentView: View {
    @State private var consumed: Int = 0
    private let goal: Int = 2000

    public init() {}

    public var body: some View {
        VStack(spacing: 12) {
            Gauge(value: Double(consumed), in: 0...Double(goal)) {
                Text("Water")
            } currentValueLabel: {
                Text("\(consumed) ml")
            }
            .gaugeStyle(.accessoryCircular)

            Text("Goal: \(goal) ml")
                .font(.footnote)
                .foregroundStyle(.secondary)

            HStack {
                ForEach([100, 200, 300], id: \.self) { amount in
                    Button("+\(amount)") {
                        consumed = min(consumed + amount, goal)
                    }
                    .buttonStyle(.borderedProminent)
                }
            }

            Button("Reset") {
                consumed = 0
            }
            .buttonStyle(.bordered)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
