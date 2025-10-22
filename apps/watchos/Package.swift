// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "WaterMeWatch",
    platforms: [
        .watchOS(.v10)
    ],
    products: [
        .library(name: "WaterMeWatch", targets: ["WaterMeWatch"])
    ],
    targets: [
        .target(
            name: "WaterMeWatch",
            path: "Sources"
        )
    ]
)
