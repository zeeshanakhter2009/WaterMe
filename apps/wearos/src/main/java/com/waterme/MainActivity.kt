package com.waterme

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.Scaffold
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.TimeText
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.Chip
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                var consumed by remember { mutableStateOf(0) }
                val goal = 2000

                Scaffold(
                    timeText = { TimeText() }
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(12.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(text = "${'$'}consumed / ${'$'}goal ml")
                        listOf(100, 200, 300).forEach { amount ->
                            Chip(
                                onClick = { consumed += amount },
                                label = { Text(text = "+${'$'}amount ml") }
                            )
                        }
                        Button(onClick = { consumed = 0 }) {
                            Text(text = "Reset")
                        }
                    }
                }
            }
        }
    }
}
