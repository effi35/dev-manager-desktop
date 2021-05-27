
export interface Device {
  name: string;
  description: string;
  host: string;
  port: number;
  indelible: boolean;
  default: boolean;
  files: string;
  username: string;
  privateKey?: Buffer;
  passphrase?: string;
  password?: string;
}

export interface DeviceEditSpec {
  name: string;
  host: string;
  port: number;
  username: string;
  profile: 'ose';
  privateKey?: { openSsh: string };
  passphrase?: string;
  password?: string;

  description?: string;
  default?: boolean;
}

export interface Resolver {
  readonly devices: Device[];
  load(next: (error: any, result: any) => void): void;
  modifyDeviceFile(op: 'add' | 'modify' | 'default' | 'remove', device: Partial<DeviceEditSpec>, next: (error: any, result: any) => void): void;
}

export type RunOutput = WritableStream | ((buf: Buffer) => void) | null;
export interface Session {
  run(cmd: string, stdin: ReadableStream | null, stdout: RunOutput, stderr: RunOutput, next: (error: any, result: any) => void): void;
}