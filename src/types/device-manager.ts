import {Attributes, FileEntry, FileItem} from "./file-session";
import {Device} from "./novacom-data";

export interface CrashReportEntry {
  device: string;
  path: string;
}

export interface SystemInfo {
  core_os_kernel_version?: string
  core_os_name?: string
  core_os_release?: string
  core_os_release_codename?: string
  encryption_key_type?: string
  webos_api_version?: string
  webos_build_datetime?: string
  webos_build_id?: string
  webos_imagename?: string
  webos_manufacturing_version?: string
  webos_name: string
  webos_prerelease?: string
  webos_release: string
  webos_release_codename?: string
}

export interface Shell {
  closed(): Promise<boolean>;

  dumb(): Promise<boolean>;

  listen(event: 'close' | 'data', callback: (...args: any[]) => void): this;

  write(data: string): Promise<void>;

  resize(rols: number, cols: number, height: number, width: number): Promise<void>;

  buffer(): Promise<string>;

  close(): Promise<void>;
}

export interface SessionToken {
  key: string;
  device: Device;
}

export interface FileSession {

  readdir(location: string): Promise<FileEntry[]>;

  readdir_ext(location: string): Promise<FileItem[]>;

  readlink(path: string): Promise<string>;

  stat(path: string): Promise<Attributes>;

  rm(path: string, recursive: boolean): Promise<void>;

  get(remotePath: string, localPath: string): Promise<void>;

  put(localPath: string, remotePath: string): Promise<void>;

  downloadTemp(remotePath: string): Promise<string>;

  end(): Promise<void>;
}

export interface DevicePrivateKey {
  data: string;
  privatePEM?: string;
}

export interface PackageInfo {
  id: string;
  type: string;
  title: string;
  appDescription?: string;
  vendor: string;
  version: string;
  folderPath: string;
  icon: string;
  iconPath: string;
}