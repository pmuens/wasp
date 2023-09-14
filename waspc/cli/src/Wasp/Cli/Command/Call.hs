module Wasp.Cli.Command.Call where

data Call
  = New Arguments
  | Start
  | StartDb
  | Clean
  | Uninstall
  | Compile
  | Db Arguments -- db args
  | Build
  | Version
  | MaxTest
  | MaxTest2
  | MaxTest3
  | Telemetry
  | Deps
  | Dockerfile
  | Info
  | PrintBashCompletionInstruction
  | GenerateBashCompletionScript
  | BashCompletionListCommands
  | WaspLS
  | Deploy Arguments -- deploy cmd passthrough args
  | Test Arguments -- "client" | "server", then test cmd passthrough args
  | Unknown Arguments -- all args

type Arguments = [String]
